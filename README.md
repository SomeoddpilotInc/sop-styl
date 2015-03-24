sop-styl
========

[![Build Status](https://travis-ci.org/alexsomeoddpilot/sop-styl.svg?branch=master)](https://travis-ci.org/alexsomeoddpilot/sop-styl)
[![Dependency Status](https://david-dm.org/alexsomeoddpilot/sop-styl.svg)](https://david-dm.org/alexsomeoddpilot/sop-styl)
[![devDependency Status](https://david-dm.org/alexsomeoddpilot/sop-styl/dev-status.svg)](https://david-dm.org/alexsomeoddpilot/sop-styl#info=devDependencies)

Someoddpilot's base Stylus framework

Borrowed liberally from [Bootstrap](http://getbootstrap.com) and [Nib](https://github.com/tj/nib)

## Responsive Embeds

A convenient way to make embeds responsive. Supports `16by9` and `4by3`.

```stylus
.embed-container {
  embed-responsive();
  embed-responsive-16by9();
}

.embed-item {
  embed-responsive-item();
}
```

or

```stylus
.embed-container {
  @extends $embed-responsive;
  @extends $embed-responsive-4by3;
}

.embed-item {
  @extends $embed-responsive-item;
}
```
