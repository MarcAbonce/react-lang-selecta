# React Lang Selecta

> **⚠ Warning! ⚠** This lib is satirical, inspired by my personal experiences dealing with i18n and with front-end code.  

Language selector component with random flag emojies.  

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
- Random language flags, ensuring that all Nations are treated equally... as long as they're recognized by the ~~USA~~ Unicode Consortium.  
- Leverages the power of popular dependencies such as `left-pad` to avoid reinventing the wheel.  
- Tests mocked component that calls a mocked hook to ensure that empty `div` equals empty `div` snapshot.  
- Every file is called `index` to turn your code editor into a fun maze for the entire family to enjoy.  

## How to contribute

1. Don't.  

## License

This library is distributed under the terms of the **Licence Libre du Québec – Réciprocité (LiLiQ-R)** 🄯⚜. A copy of the license can be found in the [LICENCE.txt](https://github.com/MarcAbonce/react-lang-selecta/blob/maestro/LICENCE.txt) file or at https://forge.gouv.qc.ca/licence/liliq-r/.  

## Frequently Unasked Questions

1. Where did you get the data about the locales and the regions from?  

The data comes from the [Unicode CLDR](https://cldr.unicode.org/) v42, specifically through the [Python Babel](https://babel.pocoo.org/en/latest/) library.  

2. The data is wrong and I'm offended!  

Fix it upstream in the [Unicode CLDR](https://cldr.unicode.org/) so that ~~I don't have to deal with it~~ the entire World can benefit from your contribution.  

3. Why do you use the LiLiQ license if you're not in Québec?  

Why do you use the MIT license if you're not in Massachusetts?  
