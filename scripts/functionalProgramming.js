
            /* runs test to see if expected argument is === to value returned by function2test argument */
            function myFunctionTest(expected, found){
                if(expected === found){
                    return "TEST SUCCEEDED";
                }else{
                    return "TEST FAILED.  Expected " + expected + " found " + found;
                }
            }

            /* max returns the maximum of 2 arguments */
            function max(a,b){
                if(a > b){
                    return a;
                }else{
                    return b;
                }
            }

            console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
       
            /* max3 takes 3 numbers as arguments and returns the largest */
            function maxOfThree(a,b,c){
                return max(max(a,b), c);
            }

            console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
            console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
            console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

            function isVowel(a){
                if(null !==a && a.length === 1){
                    return true;
                }else{
                    return false;
                }
            }

            console.log("Expected output of isVowel('t') is true   " + myFunctionTest(true,isVowel('t')));
            console.log("Expected output of isVowel(null) is false  " + myFunctionTest(false,isVowel(null)));
            console.log("Expected output of isVowel('aaa') is false  " + myFunctionTest(false,isVowel(null)));

            function sum(a){
                let result = 0;
                if(Array.isArray(a)){
                    result = a.reduce((i,sum) => i+ sum, 0);
                }else{
                    return null;
                }
                return result;
            }

            console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
            console.log("Expected output of sum(null) is null  " + myFunctionTest(null, sum(null)));
            
            function multiply(a){
                if(Array.isArray(a)){
                    return a.reduce((i,m) => i * m, 1);
                }else{
                    return null;
                }
            }

            console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));
            console.log("Expected output of multiply(null) is null  " + myFunctionTest(null, multiply(null)));

            function reverse(a){
                if(a == null){
                    return null;
                }

                let array = a.split('');
                return array.reduce((character, reverse) => reverse + character, '');

            }

            console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));
            console.log("Expected output of reverse('j') is 'j'  " + myFunctionTest("j", reverse("j")));
            console.log("Expected output of reverse(null) is null  " + myFunctionTest(null, reverse(null)));

            function findLongestWord(words){
                if(words == null || words.length == 0 || !Array.isArray(words)){
                    return null;
                }

                let longestWord = words.reduce((pre,current) => pre.length > current.length ? pre : current);
                return longestWord.length;
              
            }

            console.log("Expected output of findLongestWord([John, David, Tom]) is 5  " + myFunctionTest(5, findLongestWord(["John", "David", "Tom"])));
            console.log("Expected output of findLongestWord([]) is null  " + myFunctionTest(null, findLongestWord([])));

            function filterLongWords(words, len){
                if(words == null || words.length == 0 || !Array.isArray(words)){
                    return null;
                }
                return words.filter(w => w.length > len);
            }

            console.log("Expected output of filterLongWords([John, David, Tom], 4) is 'David'  " + myFunctionTest("David",filterLongWords(["John", "David", "Tom"],4)[0]));
            console.log("Expected output of filterLongWords([John, David, Tom], 5) is 'undefined'  " + myFunctionTest(undefined,filterLongWords(["John", "David", "Tom"],5)[0]));
           
            
            const a = [1,3,5,3,3]; 
            const b = a.map(function(elem, i, array) {
                return elem * 10;
            })
            document.writeln(b.toString() + "<br/>");

            const c = a.filter(function(elem, i, array){
                return elem == 3;});
            document.writeln(c.toString() + "<br/>");


            const d = a.reduce(function(prevValue, elem, i, array){
                return ""+prevValue + elem;
            });
            document.writeln(d+ "<br/>");

            const d2 = a.find(function(elem) {return elem > 1;}); //3
            const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
            document.writeln(d2+ "<br/>");
            document.writeln(d3+ "<br/>");