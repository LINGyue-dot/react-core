let firstFiber
let nextFiber = firstFiber
let shouldYield = false // 是否需要中断
// 当前存在如下的 fiber 树（虚拟 DOM 树）
// firstFiber -> firstChild -> sibling
function performUnitOfWork(nextFiber) {
  // ... 操作 fiber 节点
  return nextFiber.next
}

function workLoop(deadline) {
  while (nextFiber && !shouldYield) {
    nextFiber = performUnitOfWork(nextFiber)
    // 判断距离时间，如果太近就进行中断
    shouldYield = deadline.timeReaming < 1
  }
  requestIdleCallback(workLoop)
}
// 
requestIdleCallback(workLoop)
