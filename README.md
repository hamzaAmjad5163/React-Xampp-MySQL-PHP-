# SORTING ALGORITHMS (DSA)
## SignIn/ SignUp Page: (React/ Xampp server 'PHP, MySql')
![Untitled design (5)](https://github.com/user-attachments/assets/ee6da807-3b21-496b-97c5-b6e4e707620e)
# Bubble Sorting:
![image](https://github.com/user-attachments/assets/c4c7fb78-f2a8-4500-84fc-fdd9236d0a9c)

-> Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.

1. We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on.
2. In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.
3. In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.


# Quick Sorting: 
![image](https://github.com/user-attachments/assets/55250a16-98c0-4c66-90a8-d7fa942018fe)

-> QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
## How does QuickSort Algorithm work?
QuickSort works on the principle of divide and conquer, breaking down the problem into smaller sub-problems.
There are mainly three steps in the algorithm:

1. Choose a Pivot: Select an element from the array as the pivot. The choice of pivot can vary (e.g., first element, last element, random element, or median).
2. Partition the Array: Rearrange the array around the pivot. After partitioning, all elements smaller than the pivot will be on its left, and all elements greater than the pivot will be on its right. The pivot is then in its correct position, and we obtain the index of the pivot.
3. Recursively Call: Recursively apply the same process to the two partitioned sub-arrays (left and right of the pivot).
4. Base Case: The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.

# Merge Sorting:
![image](https://github.com/user-attachments/assets/50e5dac7-550d-4861-a03b-433588c8c044)

-> Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.
-> In simple terms, we can say that the process of merge sort is to divide the array into two halves, sort each half, and then merge the sorted halves back together. This process is repeated until the entire array is sorted.

## How does Merge Sort work?
Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the divide-and-conquer approach to sort a given array of elements.
Here’s a step-by-step explanation of how merge sort works:

1. Divide: Divide the list or array recursively into two halves until it can no more be divided.
2. Conquer: Each subarray is sorted individually using the merge sort algorithm.
3. Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.
