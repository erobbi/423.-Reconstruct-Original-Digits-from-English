/**
 * @param {string} s
 * @return {string}
 */

//            {zero has z remove o's to find one,
//             eight unique g remove h to count threes,
//             three found by h,
//             six unique x, remove s to count sevens,
//             seven found by s, remove v's to count fives, remove n to count nine,
//             five counted after seven,
//             four has u remove o's to count one,
//             two has w remove o to find ones,
//             one find by o, remove n to find nine
//             nine find by 2 n's
//            }

// var originalDigits = function(s) {
//     let count = new Array(10).fill(0)
//     let letters = {}
//     for (l of s) {
//         letters[l] = letters[l] + 1 || 1
//     }
//     if (letters.z) {
//         count[0] = letters.z;
//         letters.o = letters.o - letters.z;
//     }
//     if (letters.g) {
//         count[8] = letters.g;
//         letters.h = letters.h - letters.g;
//     }
//     if (letters.h) count[3] = letters.h;
//     if (letters.x) {
//         count[6] = letters.x;
//         letters.s = letters.s - letters.x;
//     }
//     if (letters.s) {
//         count[7] = letters.s;
//         letters.v -= letters.s;
//         letters.n -= letters.s;
//     }
//     if (letters.v) count[5] = letters.v;
//     if (letters.u) {
//         count[4] = letters.u;
//         letters.o -= letters.u;
//     }
//     if (letters.w) {
//         count[2] = letters.w;
//         letters.o -= letters.w;
//     }
//     if (letters.o) {
//         count[1] = letters.o;
//         letters.n -= letters.o;
//     }
//     if (letters.n) count[9] = letters.n / 2;
    
//     let r = '';
//     for (let i in count) {
//         r = r + i.toString().repeat(count[i])
//     }
//     return r
// };

const DIGITS = [
    ["0",25,[14]],
    ["2",22,[14]],
    ["4",20,[5,14]],
    ["6",23,[18,8]],
    ["8",6,[8,7]],
    ["5",5,[8]],
    ["7",18,[]],
    ["3",7,[]],
    ["9",8,[]],
    ["1",14,[]]
]
var originalDigits = function(S) {
    let fmap = new Uint16Array(26),
        ans = new Array(10), len = S.length
    for (let i = 0; i < len; i++)
        fmap[S.charCodeAt(i) - 97]++
    for (let i = 0; i < 10; i++) {
        let [dig, char, rems] = DIGITS[i],
            count = fmap[char]
        for (let j = 0; j < rems.length; j++)
            fmap[rems[j]] -= count
        ans[dig] = dig.repeat(count)
    }
    return ans.join("")
};
