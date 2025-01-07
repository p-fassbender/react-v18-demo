import './App.css'
import './appStyles.css'
import styles from './appStyles.module.css'
import { ClickHandler } from './components/ClickHandler'
import { Form } from './components/Form'
import { Greet } from './components/Greet'
import { InlineStyling } from './components/InlineStyling'
import { Message } from './components/Message'
import { NameList } from './components/NameList'
import { ParentComponent } from './components/ParentComponent'
import { PostForm } from './components/PostForm'
import { PostList } from './components/PostList'
import { StylesheetStyling } from './components/StylesheetStyling'
import { UserGreeting } from './components/UserGreeting'
import NAMES from './components/data.json'
import { useState, useTransition } from 'react'

function App() {

    // useTransition
    const [query, setQuery] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [isPending, startTransition] = useTransition()
    const changeHandler = (event) => {
        setInputValue(event.target.value)
        startTransition(() => setQuery(event.target.value))
    }
    const filteredNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })

    return (
        <>
            {/* PROPS */}
            {/* <Greet name='Bruce' heroName='Batman'/>
            <Greet name='Clark' heroName='Superman'>
                <button>Action</button>
            </Greet>
            <Greet name='Diana' heroName='Wonder Woman'>
                <p>This is children props.</p>
            </Greet> */}

            {/* STATE */}
            {/* <Message/> */}

            {/* EVENT HANDLING */}
            {/* <ClickHandler /> */}

            {/* calling a function from a parent component in the child component */}
            {/* <ParentComponent /> */}

            {/* CONDITIONAL RENDERING */}
            {/* <UserGreeting /> */}

            {/* LIST RENDERING */}
            {/* <NameList /> */}

            {/* STYLING */}
            {/* <StylesheetStyling />
            <InlineStyling />
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1> */}

            {/* FORMS */}
            {/* <Form /> */}

            {/* HTTP GET AND POST REQUESTS */}
            {/* <PostList />
            <PostForm /> */}

            {/* useTransition */}
            <div>
                <input type='text' value={query} onChange={changeHandler} />
                {isPending && <p>Updating list...</p>}
                {
                    filteredNames.map((item) => (
                        <p key={item.id}>
                            {item.first_name} {item.last_name}
                        </p>
                    ))
                }
            </div>
        </>
    )
}

export default App
