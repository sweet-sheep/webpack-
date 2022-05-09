/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";
// todo ycm 编译控制队列 这里是可以并发处理的 默认的并发数是 100
class Semaphore {
	/**
	 * Creates an instance of Semaphore.
	 *
	 * @param {number} available the amount available number of "tasks"
	 * in the Semaphore
	 */
	constructor(available) {
		this.available = available; //并发数
		/** @type {(function(): void)[]} */
		this.waiters = [];
		/** @private */
		this._continue = this._continue.bind(this);
	}

	/**
	 * @param {function(): void} callback function block to capture and run
	 * @returns {void}
	 */
	// 申请处理资源，如果有闲置资源(即并发数量)则立即执行处理，并且闲置的资源减1；否则存入等待队列中
	acquire(callback) {
		if (this.available > 0) {
			this.available--;
			callback();
		} else {
			this.waiters.push(callback);
		}
	}
	//释放资源。在 acquire 中会调用 callback 方法，在这里需要使用 release 释放资源，将闲置资源加1。同时会检查是否还有待处理内容，如果有则继续处理
	release() {
		this.available++;
		if (this.waiters.length > 0) {
			process.nextTick(this._continue);
		}
	}

	_continue() {
		if (this.available > 0) {
			if (this.waiters.length > 0) {
				this.available--;
				const callback = this.waiters.pop();
				callback();
			}
		}
	}
}

module.exports = Semaphore;
