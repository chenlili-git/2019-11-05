### vuex

state   驱动应用的数据源  data(){return {num:0}}

view  以声明的方式将state映射到视图（{{num}}）

actions 响应在view


> 基本操作
- 下载vuex  yarn add vuex
- 引包
    - import Vuex from 'vuex'
    - 


### getters (为了修改数据之后的二次操作)
    如果数据的二次操作多个组件需要复用，可以使用getters

    ```
        {
            getters:{
                toDou(state){
                    return state.xx的二次操作
                }
            }
        }
        

        import {mapGetters} from 'vuex';

        computed:{
            ...mapGetters(['toDou'])
        }



    ```

### module

```
    const moduleA = {
        state: { ... },
        mutations: { ... },
        actions: { ... },
        getters: { ... }
    }

    const moduleB = {
        state: { ... },
        mutations: { ... },
        actions: { ... }
    }

    const store = new Vuex.Store({
        modules: {
            a: moduleA,
            b: moduleB
        }
    })

    store.state.a // -> moduleA 的状态
    store.state.b // -> moduleB 的状态

```