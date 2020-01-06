import * as types from '../types'

/**
 * App通用配置
 */
const state = {

	TokenId: JSON.parse(localStorage.getItem('tokenId')) || '', //token
	userData: JSON.parse(localStorage.getItem('userData')) || '', //token

}
const actions = {
	//保存token
	setToken({
		commit
	}, res) {
		localStorage.setItem('tokenId', JSON.stringify(res))
		commit(types.ADD_TOKEN, res)
	},
	//保存个人信息 
	setUserData({
		commit
	}, res) {
		localStorage.setItem('userData', JSON.stringify(res))
		commit(types.SET_USER_DATA, res)
	}

}
const getters = {
	TokenId: state => state.TokenId,
	userData: state => state.userData,

}
const mutations = {
	[types.SET_USER_DATA](state, res) {
		state.userData = res
	},
	[types.ADD_TOKEN](state, res) {
		state.TokenId = res
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}