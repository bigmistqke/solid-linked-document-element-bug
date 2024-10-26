import { Component, createSignal, onMount } from 'solid-js'

export const BugCheck: Component = () => {
  const [documentElement, setDocumentElement] = createSignal<HTMLElement>()
  return (
    <pre
      ref={element => {
        onMount(() => setDocumentElement(element.ownerDocument.documentElement))
      }}
    >
      {documentElement() === null ? 'NULL' : documentElement()?.innerHTML}
    </pre>
  )
}
