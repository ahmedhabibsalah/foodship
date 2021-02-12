import React from 'react'
import { FeatureButton, FeatureContainer } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1> Dessert Of The Day</h1>
            <p>Cold Fudge Cake</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
