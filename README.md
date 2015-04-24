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
  embed-responsive(16, 9);
}

.embed-item {
  embed-responsive-item();
}
```

or

```stylus
.embed-container {
  @extends $embed-responsive-4by3;
}

.embed-item {
  @extends $embed-responsive-item;
}
```

## Font Specs

A convenient way to set font size, line-height, letter-spacing, and smoothing. Assumes a base font-size of 14. This can be reconfigured by setting the `$base-font-size` variable.

```stylus
.foo {
  font-specs(16, 1.4, 100, true);
}
```

## Vendor Prefix Mixins

Convenient vendor prefixes have been added for:

* backface-visibility
* appearance
* transition
* transform
* animation
* animation-timing-function
* animation-delay
* animation-duration

## Responsive

A convenient way to make images responsive.

```stylus
img {
  img-responsive();
}
```

## Screen Reader

Makes an element only available to screen-readers, aiding in accessibility.

```stylus
.help-text {
  sop-sr-only();
}
```

# TODO

* Fontello setup
* Touch detection
* Viewport filled and centered content
* Responsive show and hide
