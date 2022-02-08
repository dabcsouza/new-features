import React, { createContext, useState, useCallback } from 'react';

const Context = createContext();

export function DropdownProvider ({ children }) {
  const [options, setOptions] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedId, setCachedId] = useState(null);

  const registerOption = useCallback(({
    id,
    optionDimensions,
    optionCenterX,
    WrapedContent,
    backgroundHeight,

  }) => {
    setOptions((items) => [
      ...items,
      id,
      optionDimensions,
      optionCenterX,
      WrapedContent,
      backgroundHeight,
    ])
  }, [setOptions]);

  const updateOptionsProps = useCallback((optionId, props) => {
    setOptions((items) => {
      items.map((item) => {
        if( item.id === optionId) item = {...props, ...item}
        return item
      })
    })
  }, [setOptions]);

  const getOptionById = useCallback(() => {}, [])

  return (
    <Context.Provider
      value={{
        options,
        setOptions,
        targetId,
        setTargetId,
        cachedId,
        setCachedId,
      }}
    >
      { children }
    </Context.Provider>
  )
}
