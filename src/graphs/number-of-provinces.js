"use strict";
/*
  Number Of Provinces

  There are n cities. Some of them are connected, while some are not.
  If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
  A province is a group of directly or indirectly connected cities and no other cities outside of the group.
  You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
  Return the total number of provinces.

  Example:
  Input: [[1,1,0],[1,1,0],[0,0,1]]
  Output: 2
*/
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function numberOfProvinces(isConnected) {
    var e_1, _a;
    var graph = buildGraph(isConnected);
    var visited = new Set();
    var result = 0;
    function traverse(node) {
        var e_2, _a;
        if (visited.has(node)) {
            return;
        }
        visited.add(node);
        var connections = graph.get(node);
        try {
            for (var connections_1 = __values(connections), connections_1_1 = connections_1.next(); !connections_1_1.done; connections_1_1 = connections_1.next()) {
                var connection = connections_1_1.value;
                traverse(connection);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (connections_1_1 && !connections_1_1.done && (_a = connections_1.return)) _a.call(connections_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    try {
        for (var graph_1 = __values(graph), graph_1_1 = graph_1.next(); !graph_1_1.done; graph_1_1 = graph_1.next()) {
            var _b = __read(graph_1_1.value, 1), node = _b[0];
            if (!visited.has(node)) {
                traverse(node);
                result++;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (graph_1_1 && !graph_1_1.done && (_a = graph_1.return)) _a.call(graph_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function buildGraph(isConnected) {
    var graph = new Map();
    for (var i = 0; i < isConnected.length; i++) {
        if (!graph.has(i)) {
            graph.set(i, new Set());
        }
        for (var j = 0; j < isConnected[i].length; j++) {
            if (i === j) {
                continue;
            }
            if (isConnected[i][j] === 1) {
                graph.get(i).add(j);
            }
        }
    }
    return graph;
}
(0, assert_1.strictEqual)(numberOfProvinces([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
]), 2);
