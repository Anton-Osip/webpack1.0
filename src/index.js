import React from 'react'
import { createRoot } from 'react-dom/client'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

const app = <h1>This is NEW REACT APP!!!!</h1>

root.render(app)
