# This code will convert all types of input payloads to a generic payload on the basis of their type. We have to define the keys equality between source and generic data in constant.js file.

1. Add keys equality object
2. Run -> node index.js

# Explaination

1. Suppose we have three type of inputs
    * const sourceData1 = {
        a1:11,
        b1:11
    };

    * const sourceData2 = {
        a2:12,
        b2:12
    };

2. Suppose we have to convert all input data to a generic data like :
    *   {
            "g3":11, <!-- g3 is same as a1 in sourceData1 and a2 in sourceData2 -->
            "f3":11  <!-- f3 is same as b1 in sourceData1 and b2 in sourceData2 -->
        }

3. Now the Keys euality object will be look like this
    *  type1: {
            g3: "a1",
            f3: "b1"
        }
    *   type2: {
            g3: "a2",
            f3: "b2"
        } <!-- These objects simply explains the similar keys in both source and target data -->
    # Note: Just simply add keys equality objects for every type of input data
    