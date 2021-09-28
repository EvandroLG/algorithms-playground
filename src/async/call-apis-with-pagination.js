/*
  Call Apis With Pagination

  Have you ever met some APIs with pagination, and needed to recursively fetch them based on response of previous request?
  1. For initial request, we just fetch fetchList. and get the last item id from response.
  2. For next page, we need to call fetchList(lastItemId).
  3. Repeat above process.

  The /list API only gives us 5 items at a time, with server-side filtering, it might be less than 5. But if none returned, it means nothing to fetch any more and we should stop.
  You are asked to create a function that could return arbitrary amount of items.
*/

function callApisWithPagination(amount = 5) {
  const data = (async function getItems(lastId, output = []) {
    const { items } = await fetchList(lastId);
    output.push(...items);

    if (!items.length || output.length >= amount) {
      return output.slice(0, amount);
    }

    const { id } = items[items.length - 1];

    return getItems(id, output);
  })();

  return Promise.resolve(data);
}

function fetchList(id) {
  const result = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  if (!id) {
    return Promise.resolve({
      items: result.slice(0, 3),
    });
  }

  return Promise.resolve({
    items: result.filter((item) => item.id > id).slice(0, 3),
  });
}

const assert = require('assert');

(async function () {
  assert.deepEqual(await callApisWithPagination(), [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);

  assert.deepEqual(await callApisWithPagination(7), [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ]);
})();
