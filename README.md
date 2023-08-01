## Option randomization models

Multiple-choice item banks are widely used in educational assessments and standardized testing.

One crucial aspect of creating a fair and reliable test is the randomization of options to prevent bias and ensure that the test results accurately reflect the knowledge and skills of the test-takers.

In this session, we will discuss how to randomize the options in a multiple-choice item bank, explore the number of possible combinations for a 4-option multiple-choice item, and consider the need for including all possibilities.

Then, we will delve into strategies for wisely selecting optimal combinations to maintain test integrity and enhance the assessment process.

Finally, we will propose basic models for completing the entire process.

**A typical 4-option item:**

a. option 1

b. option 2

c. option 3

d. option 4

**Number of possible combinations for a 4-option item:**

In a multiple-choice item with four options, there are 24 possible ways to arrange the answer choices.

The calculation can be understood using permutation theory, where nPn (n permutation n) equals n!.

In this case, it's 4P4 = 4! = 4 x 3 x 2 x 1 = 24.

**These 24 possible arrangements are:**

`[a, b, c, d] [b, a, c, d] [c, a, b, d] [d, a, b, c]`
`[a, b, d, c] [b, a, d, c] [c, a, d, b] [d, a, c, b]`

`[a, c, b, d] [b, c, a, d] [c, b, a, d] [d, b, a, c]`
`[a, c, d, b] [b, c, d, a] [c, b, d, a] [d, b, c, a]`

`[a, d, b, c] [b, d, a, c] [c, d, a, b] [d, c, a, b]`
`[a, d, c, b] [b, d, c, a] [c, d, b, a] [d, c, b, a]`

**Randomizing options in a multiple-choice item bank:**

Randomizing options is an essential step in item development to eliminate any unintended patterns that may influence test-takers' choices.

To randomize the options, each question must have the same number of answer choices, and these choices should be distributed randomly across different versions of the test.

This process is usually automated through computer software, ensuring that each test taker receives a unique and unbiased set of options.

**Do we need to include all possibilities (option combinations)?**

While there are 24 possible combinations, it is not necessary to include all of them in the item bank.

Instead, a subset of these arrangements should be strategically selected to maintain the test's integrity and ensure that it evaluates the intended knowledge and skills of the test-takers effectively.

Including all possible combinations would lead to an impractical number of test versions and could compromise the quality and security of the assessment.

**Selecting the optimal combination(s) wisely:**

To select the optimal combination(s) for a multiple-choice item, various factors should be considered:

**Content representation:** Ensure that each combination represents the content and learning objectives being assessed. A well-designed test should have a balanced representation of topics and difficulty levels.

**Item difficulty:** Consider the difficulty level of each combination to create a test with a suitable range of item difficulties. This will provide a better discrimination between high and low-performing test-takers.

**Statistical analysis:** Conduct statistical analyses, such as item analysis, to identify combinations that perform well in distinguishing between strong and weak students. This can help to refine the item bank and improve the overall test quality.

**Cognitive levels:** Align each combination with specific cognitive levels, such as remembering, understanding, applying, analyzing, evaluating, and creating. This ensures that the test assesses various cognitive skills and abilities.

**Bias elimination:** Randomize options to minimize any potential bias introduced by the order of choices. This can prevent systematic patterns that could give away the correct answer or influence test-takers' decisions.

**Random syntax**

model 0: n/a

model 1: Math.random()*3

model 2: Math.random()*(6-3+1)+3)

model 1 and 2 mixed: Math.random()*6

**Proposed models for option randomization**

### Model 0

`a`
`b`
`c`
`d`

### Model 1 - For the last option includes 'All of the Above' (in 3|4-option item)

`((item.d && swap==2)?c:(swap==1?b:a))`

`(swap==1?a:b)`

`((item.d && swap==2)?a:c)`

### Model 2 - No restriction options (4-option item)

`(swap==3?b:(swap==4?c:(swap==5?d:a)))`

`(swap==3?a:(swap==4?d:(swap==5?c:b)))`

`(swap==3?d:(swap==4?a:(swap==5?b:c)))`

`(swap==3?c:(swap==4?b:(swap==5?a:d)))`

### Models 1 and 2 Mixed Mode (unfinished/intermediate)

`((swap==1||swap==3)?b:((swap==2||swap==4)?c:(swap==5?d:a)))`

`((swap==1||swap==3)?a:(swap==4?d:(swap==5?c:b)))`

`((swap==2||swap==4)?a:(swap==3?d:(swap==5?b:c)))`

`(swap==3?c:(swap==4?b:(swap==5?a:d)))`

### Models 1 and 2 Mixed Mode (finished/final)

`((swap==1||(item.d && swap==3))?b:(((item.d && swap==2)||(item.d && swap==4))?c:((item.d && swap==5)?d:a)))`

`((swap==1||(item.d && swap==3))?a:((item.d && swap==4)?d:((item.d && swap==5)?c:b)))`

`(((item.d && swap==2)||(item.d && swap==4))?a:((item.d && swap==3)?d:((item.d && swap==5)?b:c)))`

`(swap==3?c:(swap==4?b:(swap==5?a:d)))`

**Remarks on Mixed Mode:** assuming 'All of the Above' is absent in 4-option items but is allowed in 3-option items; specific settings on random range might apply.

### Summary

Randomizing options in a multiple-choice item bank is a crucial step in creating fair and reliable tests. While a 4-option multiple-choice item has 24 possible combinations, it is not necessary to include all of them. Instead, careful consideration of content representation, item difficulty, statistical analysis, cognitive levels, and bias elimination should guide the selection of optimal combinations. With the proposed models, we would like to kick start an open discussion, at least, provide a certain insight of interest. By adopting these strategies, educators and test developers can create assessments that accurately measure test-takers' knowledge and skills while upholding the integrity of the testing process.
