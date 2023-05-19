import re

import babel
import flag


locale_flags = {}
emojis = set()
for locale in babel.localedata.locale_identifiers():
    locale_parts = locale.split('_')
    if len(locale_parts) > 1 and re.match(r'[A-Z]{2}', locale_parts[1]):
        flag_emoji = flag.flag(locale_parts[1])
        emojis.add(flag_emoji)
        locale_flags[locale_parts[0]] = locale_flags.get(locale_parts[0], []) + [flag_emoji]

print(locale_flags)
