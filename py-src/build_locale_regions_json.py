# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

import re
import json

from babel import Locale, languages, localedata


int_locale = Locale('ia')
locale_regions = {}
unofficial_locale_regions = {}


def add_locale_to_dict(lang, region, locale_dict):
    if lang in locale_dict:
        if region not in locale_dict[lang]['regions']:
            locale_dict[lang]['regions'].append(region)
    else:
        name = int_locale.languages.get(lang)
        if not name:
            name = Locale(lang).language_name
        locale_dict[lang] = {'name': name.title(), 'regions': [region]}


for locale in localedata.locale_identifiers():
    locale_parts = locale.split('_')
    if len(locale_parts) > 1 and re.match(r'^[A-Z]{2}$', locale_parts[-1]):
        lang = locale_parts[0]
        region = locale_parts[-1]

        # if language is not official in region, store it separately
        # this avoids locales like "German English" or "Swiss Portuguese"
        if lang in map(lambda x: x.split('_')[0], languages.get_official_languages(region)):
            add_locale_to_dict(lang, region, locale_regions)
        else:
            add_locale_to_dict(lang, region, unofficial_locale_regions)
    elif locale_parts[-1] == '001':
        # add United Nations for languages like Esperanto and Yiddish
        add_locale_to_dict(locale_parts[0], 'UN', locale_regions)


# merge back languages with no official region
for lang in unofficial_locale_regions:
    if lang not in locale_regions:
        locale_regions[lang] = unofficial_locale_regions[lang]


# sort regions so each run returns same output
for locale in locale_regions:
    locale_regions[locale]['regions'] = sorted(locale_regions[locale]['regions'])

with open('../src/data/locale_regions.json', 'w+') as f:
    json.dump(locale_regions, f, sort_keys=True)
