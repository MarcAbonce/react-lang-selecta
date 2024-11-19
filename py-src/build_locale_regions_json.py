# 🄯 2023 Marc Abonce Seguin
# SPDX-License-Identifier: LiLiQ-Rplus-1.1 ⚜
# License-Filename: LICENCE.txt

import csv
import json
import re

from babel import Locale, languages, localedata


int_locale = Locale('ia')
locale_regions = {}
unofficial_locale_regions = {}


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
        add_locale_to_dict(locale_parts[0], 'UN', locale_regions)


# merge back languages with no official region
for lang in unofficial_locale_regions:
    if lang not in locale_regions:
        locale_regions[lang] = unofficial_locale_regions[lang]


# get more language codes and names from Ethnologue
with open('./data/LanguageCodes.tab') as ethnologue_file:
    ethnologue_table = csv.reader(ethnologue_file, delimiter='\t')
    next(ethnologue_table)  # skip header row
    for lang_id, country_id, _, english_name in ethnologue_table:
        if lang_id not in locale_regions:
            add_locale_to_dict(
                lang_id, country_id, locale_regions, fallback_name=english_name
            )


# sort regions so each run returns same output
for locale in locale_regions:
    locale_regions[locale]['regions'] = sorted(locale_regions[locale]['regions'])

with open('../src/data/locale_regions.json', 'w+') as f:
    json.dump(locale_regions, f, sort_keys=True, indent=2)
