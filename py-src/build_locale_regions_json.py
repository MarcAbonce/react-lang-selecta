import re
import json

import babel


locale_regions = {}
for locale in babel.localedata.locale_identifiers():
    locale_parts = locale.split('_')
    if len(locale_parts) > 1 and re.match(r'[A-Z]{2}', locale_parts[-1]):
        lang = locale_parts[0]
        region = locale_parts[-1]
        if lang not in locale_regions:
            locale_regions[lang] = [region]
        else:
            locale_regions[lang].append(region)

with open('./locale_regions.json', 'w+') as f:
    json.dump(locale_regions, f)
