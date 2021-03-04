const t_stone_count = document.getElementById('stone_count');
const t_coin_count = document.getElementById('coin_count');
const t_mines_count = document.getElementById('mines_count');
const b_build_mine = document.getElementById('b_build_mine');
const b_sell_stone = document.getElementById('b_sell_stone');

const localStorage = window.localStorage;

const fields = {
	stone: t_stone_count,
	coin: t_coin_count,
	mines: t_mines_count
}

const buttons = {
	'build_mine': b_build_mine,
	'sell_stone': b_sell_stone
}

const actions = {
	'build_mine': function (_state) {
		if (_state.coin >= 10) 
		{
			_state.coin -= 10;
			_state.mines += 1;
		}
		return _state;
	},
	'sell_stone': function (_state) {
		if (_state.stone >= 10)
		{
			_state.stone -= 10;
			_state.coin += 1;
		}
		return _state;
	}
}

const loopActions = {
	'minig': function (_state) {
		_state.stone += _state.mines * _state.buffs.minig;
		return _state;
	}
}

var allowedLoopActions = ['minig'];

var state = {
	stone: 5,
	coin: 10,
	mines: 0,
	buffs: {
		minig: 1
	},
	prices: {
		mine: 10
	}
}


function start() {
	console.log('script started');
	let savedState = window.localStorage.getItem('s');
	if (savedState) 
	{
		state = JSON.parse(atob(savedState));
	}
	bindButtons();
	updateAvailableValues();
	const interval = setInterval(loop, 1000);

}

function bindButtons() {
	let keys = Object.keys(buttons);
	for (let i = 0; i < keys.length; i++) {
		buttons[keys[i]].addEventListener('click', changeState(actions[keys[i]]));
	}
}

function changeState(func) {
	console.log('func binding');
	return function () {
		console.log('state update');
		state = func(state);
		console.log(state);
		updateAvailableValues();
	}
}

function updateAvailableValues() {
	let keys = Object.keys(state);
	for (let i = 0; i < keys.length; i++) {
		setValue(keys[i], state[keys[i]]);
	}
}

function setValue(field_name, value) {
	let field = fields[field_name];
	if (field != undefined) 
		field.innerText = value;
}

function loop() {
	for (let i = 0; i < allowedLoopActions.length; i++) {
		state = loopActions[allowedLoopActions[i]](state);
	}
	updateAvailableValues();
	console.log('loop');
	localStorage.setItem('s', btoa(JSON.stringify(state)));
}



start();
