import {createStore} from 'vuex'
const store = createStore({
    state () {
        return {
            tokenItemList:[],
            questionList:[],
            cardList:[]

          }
    },
    mutations: {
        increment (state) {
          state.count++
        },
        setTokenItemList(state, TokenItemListPayload){
            state.tokenItemList = TokenItemListPayload
        },
        setQuestionList(state,QuestionListPayLoad){
            state.questionList = QuestionListPayLoad
        },
        setCardList(state,CardListPayLoad){
            state.cardList = CardListPayLoad
        }
    },
    actions:{
        async fetchAllTokenItemList({commit}){
            try {
                const response = await fetch("/api/tokenItemList.json")
                if(!response.ok) throw new Error("Something went wrong")
                    const data = await response.json()
                    commit("setTokenItemList",data)
               } catch (err) {
                   console.log(err)
               }
        },
        async fetchAllQuestionsList({commit}){
            try {
                const response = await fetch("/api/questionList.json")
                if(!response.ok) throw new Error("Something went wrong")
                    const data = await response.json()
                    commit("setQuestionList",data)
               } catch (err) {
                   console.log(err)
               }
        },
        async fetchAllCardList({commit}){
            try {
                const response = await fetch("/api/cardList.json")
                if(!response.ok) throw new Error("Something went wrong")
                    const data = await response.json()
                    commit("setCardList",data)
               } catch (err) {
                   console.log(err)
               }
        },
    }
})
export default store;
