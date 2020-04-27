import React, { useState, useEffect } from 'react'

const isSubstring = (string, sub) => string.indexOf(sub) > -1;

const getRemainingSection = (string, sub) => string.replace(sub, '')

const Affirmation = ({ affirmation, typedString }) => {
  const [ textColor, setTextColor ] = useState('green')
  const [ typedSection, setTypedSection ] = useState('')
  const [ remainingSection, setRemainingSection ] = useState(affirmation);

  useEffect(()=> {
    if (isSubstring(affirmation, typedString)) {
      setTextColor('green')
      setTypedSection(typedString)
      setRemainingSection(getRemainingSection(affirmation, typedString))
    } else {
      setTextColor('red')
    }
  }, [ typedString ])

  useEffect(()=> {
    setTypedSection('')
    setRemainingSection(affirmation)
  }, [ affirmation ])

  return (
    <h3>
      <span style={{color: textColor}}>{typedSection}</span> {remainingSection}
    </h3>
  );
}

export default Affirmation;