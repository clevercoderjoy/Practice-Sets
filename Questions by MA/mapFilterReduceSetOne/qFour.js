// write a function which removes all letters between first and last letter of a word and replace with number of letters

const input = "Every developer likes to mix kubernetes and javascript";

const getResults = (str) =>
    str.split(" ").reduce((acc, curr) => {
        if (curr.length > 2) {
            return (
                acc + " " + curr[0] + (curr.length - 2) + curr[curr.length - 1]
            );
        }
        return acc + " " + curr;
    }, "");

console.log(getResults(input));
//expected output

("E3y d7r l3s to m1x k8s a1d j8t");
