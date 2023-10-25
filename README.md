# React Lang Selecta

> **⚠ Warning! ⚠** This lib is satirical, inspired by my personal experiences dealing with i18n and with front-end code.  

Language selector component with flag emojies.  

You just give it a list of language codes and it gives you a `select` element with each language as an option along with the flag of the language.  

## How to use

Like this:  

```html
<label>
    Select a language please:
    <LangSelecta langs={['es', 'zh', 'en', 'fr', 'ar']} />
</label>
```

Which should return something like this:  

```html
<label>
    Select a language please:
    <select>
        <option value="fr">🇨🇦 Francese</option>
        <option value="ar">🇱🇧 Arabe</option>
        <option value="es">🇵🇪 Espaniol</option>
        <option value="en">🇨🇦 Anglese</option>
        <option value="zh">🇲🇴 Chinese</option>
    </select>
</label>
```

You could also control the component, style it and use more props. Check out the storybook for more examples.  

## Features included

- Not knowing the difference between a language and a locale.  
- Language names are all written in the international language so you don't get confused with foreign fonts.  
- Includes every national flag as long as it's recognized by the ~~USA~~ Unicode Consortium.  
- Leverages the power of popular dependencies such as `left-pad` to avoid reinventing the wheel.  
- Test that mocked component calls mocked hook and that empty div matches empty div.  

## How to contribute

1. Don't.  

## License

This library is distributed under the terms of the **Licence Libre du Québec – Réciprocité (LiLiQ-R)** 🄯⚜. A copy of the license can be found in the [LICENCE.txt](LICENCE.txt) file or at https://forge.gouv.qc.ca/licence/liliq-r/.
