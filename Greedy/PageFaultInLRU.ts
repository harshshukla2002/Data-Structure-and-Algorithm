/*
    n operating systems that use paging for memory management, page replacement algorithm is needed to decide which page needs to be replaced when the new page comes in. Whenever a new page is referred and is not present in memory, the page fault occurs and Operating System replaces one of the existing pages with a newly needed page.

    Given a sequence of pages in an array pages[] of length N and memory capacity C, find the number of page faults using Least Recently Used (LRU) Algorithm. 

    Note:- Before solving this example revising the OS LRU cache mechanism is recommended.
*/

const PageFault = (pages: number[], C: number): number => {
  let cache = new Set();
  let pageFault: number = 0;
  let recent: number[] = [];

  for (let page of pages) {
    if (!cache.has(page)) {
      pageFault++;

      if (cache.size === C) {
        let lru = recent.shift();
        cache.delete(lru);
      }

      cache.add(page);
    } else {
      let index = recent.indexOf(page);
      recent.splice(index, 1);
    }

    recent.push(page);
  }

  return pageFault;
};
