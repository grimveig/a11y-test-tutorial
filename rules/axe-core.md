#Axe core config
<em>This page contains a summary of tags and rule-ids uses by axe-core for descriptions see [documentation on gihtub](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) </em>
or run axe.getRules([tag1,tag2])
## tags
```wcag2a```, ```wcag2aa```, ```Section508```, ```best-practice```, ```experimental```
##Categories	
```cat.aria``` , ```cat.color```, ```cat.forms```, ```cat.keyboard```, ```cat.language```, ```cat.name-role-value```,
```cat.parsing```, ```cat.semantics```, ```cat.sensory-and-visual-cues```, ```cat.structure```, ```cat.tables```,
```cat.text-alternatives```, ```cat.time-and-media```
##Rules
### ```wcag2a```
```
[ 'area-alt',
  'aria-allowed-attr',
  'aria-dpub-role-fallback',
  'aria-hidden-body',
  'aria-required-attr',
  'aria-required-children',
  'aria-required-parent',
  'aria-roles',
  'aria-valid-attr-value',
  'aria-valid-attr',
  'audio-caption',
  'blink',
  'button-name',
  'bypass',
  'definition-list',
  'dlitem',
  'document-title',
  'duplicate-id',
  'frame-title',
  'html-has-lang',
  'html-lang-valid',
  'image-alt',
  'input-image-alt',
  'label',
  'layout-table',
  'link-in-text-block',
  'link-name',
  'list',
  'listitem',
  'marquee',
  'meta-refresh',
  'object-alt',
  'p-as-heading',
  'server-side-image-map',
  'table-fake-caption',
  'td-has-header',
  'td-headers-attr',
  'th-has-data-cells',
  'video-caption' ]
```

### ```wcag2aa```
<em>NB! If you have no violations on level AA you can still have violations on level A, remember to run both!</em>
``` 
[ 'color-contrast',
  'meta-viewport',
  'valid-lang',
  'video-description' ]

```

### ```best-practice```
```
[ 'accesskeys',
  'checkboxgroup',
  'empty-heading',
  'focus-order-semantics',
  'frame-title-unique',
  'heading-order',
  'image-redundant-alt',
  'label-title-only',
  'landmark-banner-is-top-level',
  'landmark-contentinfo-is-top-level',
  'landmark-main-is-top-level',
  'landmark-no-duplicate-banner',
  'landmark-no-duplicate-contentinfo',
  'landmark-one-main',
  'meta-viewport-large',
  'page-has-heading-one',
  'radiogroup',
  'region',
  'scope-attr-valid',
  'skip-link',
  'tabindex',
  'table-duplicate-name' ]
```