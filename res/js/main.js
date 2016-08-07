//模拟字段数据
var fields = [{
	id: 'id',
	name: '',
	type: 'INT'
}, {
	id: 'name',
	name: '姓名',
	type: 'VARCHAR'
}, {
	id: 'age',
	name: '年龄',
	type: 'INT'
}, {
	id: 'add_time',
	name: '录入时间',
	type: 'DATETIME'
}, ];

var types=[
{id: '=',name: '= 等于',},
{id: '!=',name: '≠ 不等于',},
{id: '>',name: '> 大于',},
{id: '<',name: '< 小于',},
{id: '>=',name: '≥ 大于等于',},
{id: '<=',name: '≤ 小于等于',},
{id: 'like',name: '模糊查询',},
{id: 'exp',name: '自定义规则',}
];

var app = new Vue({
	el: '#app',
	data: {
		dataTable: "xx",
		conditions: [],
		fields: fields,
		types:types,
	},
	created: function() {
		if (!this.conditions.length) {
			this.conditions.push({});
		}
	}
})