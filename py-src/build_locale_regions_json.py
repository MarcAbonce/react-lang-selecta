# 🄯 2023 Marc Abonce Seguin
# SPDX-License-Identifier: LiLiQ-Rplus-1.1 ⚜
# License-Filename: LICENCE.txt

import csv
import json
import re

from babel import Locale, languages, localedata
from requests import get


int_locale = Locale('ia')
locale_regions = {}
unofficial_locale_regions = {}
international_locales = {}


# SIL provided data from CLDR repo that was not included in CLDR release
cldr_extra_resp = get('https://raw.githubusercontent.com/unicode-org/cldr/refs/heads/main/tools/cldr-code/src/main/resources/org/unicode/cldr/util/data/external/langtags.json')


# aux function to add a language to a given dict or add a region into an already added language
def add_locale_to_dict(lang, region, locale_dict, fallback_name=None):
    if lang in locale_dict:
        if region not in locale_dict[lang]['regions']:
            locale_dict[lang]['regions'].append(region)
    else:
        name = int_locale.languages.get(lang) or ''
        if not name:
            if fallback_name:
                name = fallback_name
        locale_dict[lang] = {'name': name.title(), 'regions': [region]}

    if fallback_name and not locale_dict[lang]['name']:
        locale_dict[lang]['name'] = fallback_name


# get locale data from babel library
for locale in localedata.locale_identifiers():
    locale_parts = locale.split('_')
    if len(locale_parts) > 1 and re.match(r'^[A-Z]{2}$', locale_parts[-1]):
        lang = locale_parts[0]
        region = locale_parts[-1]

        # if language is not official in region, store it separately
        # this avoids locales like "German English" or "Swiss Portuguese"
        if lang in map(lambda x: x.split('_')[0],
                       languages.get_official_languages(region, de_facto=True)):
            add_locale_to_dict(lang, region, locale_regions)
        else:
            add_locale_to_dict(lang, region, unofficial_locale_regions)
    elif locale_parts[-1] == '001':
        # add United Nations for languages like Esperanto
        add_locale_to_dict(locale_parts[0], 'UN', international_locales)


# get more languages from extra CLDR data not found in babel
if cldr_extra_resp.ok:
    cldr_extra = cldr_extra_resp.json()
    for locale in cldr_extra:
        if 'iso639_3' not in locale:
            continue
        lang_id = locale['iso639_3']
        country_id = locale.get('region')
        name = locale.get('localname') \
            or locale.get('localenames', [None])[0] \
            or locale.get('names', [None])[0] \
            or locale.get('name')
        if not country_id or country_id.isdigit():
            # locales with "international" regions like 001 or 419
            add_locale_to_dict(
                lang_id, 'UN', international_locales, fallback_name=name
            )
        else:
            add_locale_to_dict(
                lang_id, country_id, unofficial_locale_regions, fallback_name=name
            )


# merge back languages with no official region
for lang in unofficial_locale_regions:
    if lang not in locale_regions:
        locale_regions[lang] = unofficial_locale_regions[lang]
for lang in international_locales:
    if lang not in locale_regions:
        locale_regions[lang] = international_locales[lang]


# sort regions so each run returns same output
for locale in locale_regions:
    locale_regions[locale]['regions'] = sorted(locale_regions[locale]['regions'])


with open('../src/data/locale_regions.json', 'w+') as f:
    json.dump(locale_regions, f, sort_keys=True, indent=2)
