function MergeSortedArray(nums1, m, nums2, n){
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;
    for(let i = 0; i < m+n; i++){
        if(p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])){
            nums1[i] = nums1Copy[p1]
            p1++;
        }else{
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}

let arr1 = [1,5,7,0,0,0];
let arr2 = [3,4,6];
let m = 3;
let n = 3;
let result = MergeSortedArray(arr1, m, arr2, n);
console.log(result);