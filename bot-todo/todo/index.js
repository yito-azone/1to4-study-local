"use strict";
// { name: タスクの名前, isDone: 完了しているかどうかの真偽値}
let tasks = [];
const fs = require("node:fs");
const fileName = "./tasks.json";

/**
 * 同期的にファイルから復元
 */
try {
  const data = fs.readFileSync("fileName", "utf-8");
  tasks = JSON.parse(data);
} catch (err) {
  console.log(`${fileName}から復元できませんでした`);
}

/**
 * タスクをファイルに保存する
 */
function saveTasks() {
  fs.writeFileSync("fileName", JSON.stringify(tasks), "utf-8");
}

/**
 * タスクを追加する
 * @param {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false });
  saveTasks();
}

/**
 * タスク名と完了したかどうかの真偽値が含まれるオブジェクトを受け取り、完了したかを返す
 * @param {object} taskName
 * @return {boolean} 完了したかどうか
 */
function isDone(task) {
  return task.isDone;
}

/**
 * タスク名と完了したかどうかの真偽値が含まれるオブジェクトを受け取り、完了していないかを返す
 * @param {object} task
 * @return {boolean} 完了していないかどうか
 */
function isNotDone(task) {
  return !isDone(task);
}

/**
 * タスクの一覧の配列を表示する
 * @return {array}
 */
function list() {
  // return tasks.filter((task) => !task.isDone).map((task) => task.name);
  // return tasks.filter((task) => !isDone(task)).map((task) => task.name);
  return tasks.filter(isNotDone).map((task) => task.name);
}

/**
 * タスクを完了状態にする
 * @param {string} taskName
 */
function done(taskName) {
  const indexFound = tasks.findIndex((task) => task.name === taskName);
  if (indexFound !== -1) {
    tasks[indexFound].isDone = true;
    saveTasks();
  }
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @return {array}
 */
function donelist() {
  // return tasks.filter((task) => task.isDone).map((task) => task.name);
  return tasks.filter(isDone).map((task) => task.name);
}

/**
 * 項目を削除する
 * @param {string} taskName
 */
function del(taskName) {
  const indexFound = tasks.findIndex((task) => task.name === taskName);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
    saveTasks();
  }
}

module.exports = { add, list, done, donelist, del };
