## option randomization mode

For a testing item with two or more options (i.e., four options below as an example):

a. option 1

b. option 2

c. option 3

d. option 4

**possible combinations:** 6*4 = 24

`[a, b, c, d] [b, a, c, d] [c, a, b, d] [d, a, b, c]`
`[a, b, d, c] [b, a, d, c] [c, a, d, b] [d, a, c, b]`

`[a, c, b, d] [b, c, a, d] [c, b, a, d] [d, b, a, c]`
`[a, c, d, b] [b, c, d, a] [c, b, d, a] [d, b, c, a]`

`[a, d, b, c] [b, d, a, c] [c, d, a, b] [d, c, a, b]`
`[a, d, c, b] [b, d, c, a] [c, d, b, a] [d, c, b, a]`

**random syntax**

model 0: n/a

model 1: Math.random()*3

model 2: Math.random()*(6-3+1)+3)

model 1 and 2 mixed: Math.random()*6

### model 0

`a`
`b`
`c`
`d`

### model 1

`((item.d && swap==2)?c:(swap==1?b:a))`

`(swap==1?a:b)`

`((item.d && swap==2)?a:c)`

### model 2

`(swap==3?b:(swap==4?c:(swap==5?d:a)))`

`(swap==3?a:(swap==4?d:(swap==5?c:b)))`

`(swap==3?d:(swap==4?a:(swap==5?b:c)))`

`(swap==3?c:(swap==4?b:(swap==5?a:d)))`

### models 1 and 2 mixed mode (unfinished/intermediate)

`((swap==1||swap==3)?b:((swap==2||swap==4)?c:(swap==5?d:a)))`

`((swap==1||swap==3)?a:(swap==4?d:(swap==5?c:b)))`

`((swap==2||swap==4)?a:(swap==3?d:(swap==5?b:c)))`

`(swap==3?c:(swap==4?b:(swap==5?a:d)))`

### models 1 and 2 mixed mode (finished/final)

`((swap==1||(item.d && swap==3))?b:(((item.d && swap==2)||(item.d && swap==4))?c:((item.d && swap==5)?d:a)))`

`((swap==1||(item.d && swap==3))?a:((item.d && swap==4)?d:((item.d && swap==5)?c:b)))`

`(((item.d && swap==2)||(item.d && swap==4))?a:((item.d && swap==3)?d:((item.d && swap==5)?b:c)))`

`(swap==3?c:(swap==4?b:(swap==5?a:d)))`

**To be continued... (explanation will be added soon)**
