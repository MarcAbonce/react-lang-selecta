import re
import json

from babel import Locale, languages, localedata


int_locale = Locale('ia')
locale_regions = {}
unofficial_locale_regions = {}


def add_locale_to_dict(lang, region, locale_dict):
    if lang in locale_dict:
        locale_dict[lang]['regions'].append(region)
    else:
        name = int_locale.languages.get(lang)
        if not name:
            name = Locale(lang).language_name
        locale_dict[lang] = { 'name': name.title(), 'regions': [region] }


for locale in localedata.locale_identifiers():
    locale_parts = locale.split('_')
    if len(locale_parts) > 1 and re.match(r'^[A-Z]{2}$', locale_parts[-1]):
        lang = locale_parts[0]
        region = locale_parts[-1]

        # if language is not official in region, store it separately
        # this avoids locales like "German English" or "Swiss Portuguese"
        if lang in languages.get_official_languages(region):
            add_locale_to_dict(lang, region, locale_regions)
        else:
            add_locale_to_dict(lang, region, unofficial_locale_regions)


# merge back languages with no official region
for lang in unofficial_locale_regions:
    if lang not in locale_regions:
        locale_regions[lang] = unofficial_locale_regions[lang]


with open('../src/data/locale_regions.json', 'w+') as f:
    json.dump(locale_regions, f)
