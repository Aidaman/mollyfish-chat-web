# Box Sizing

These types are responsible to provide some standardised ways to set component's sizes

## The rule of thumb

- Ususally you **do not need to** specify any Box Sizing
- If you do though:
  - Specify _BoxStandardSize_, since it covers most of the use cases
  - If you dealing with exceptions in design specify the _BoxConstraints_
    Note that these will be prioritized, and thus the _BoxStandartSize_ will not have any effect even when provided

## The example

Let's say we have a dumb AvatarComponent, that will have to **optionally** specify both _BoxStandardSize_ and _BoxConstraints_

AvatarComponent {  
  @Input() public size?: BoxConstraints;  
  @Input() public sizeType?: BoxStandardSize;  
  ...some code goes here  
}

- **If neither options specified**: the AvatarComponent will try to fill all the space available
- **If 'sizeType' provided:**: the AvatarComponent will be limited to premade constraints
- **If 'size' provided:**: the AvatarComponent will try to fill the provided constraints (let's say width: 350px, height: 350px)
