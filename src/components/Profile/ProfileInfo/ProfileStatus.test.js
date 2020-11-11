import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus Component', () => {
    test('status from props should be at a state', () => {
        const component = create(<ProfileStatus status='Way of Ninja' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Way of Ninja')
    })

    test('Tag <p> sholud be displayed after creating', () => {
        const component = create(<ProfileStatus status='Way of Ninja' />)
        const root = component.root
        let p = root.findByType('p')
        expect(p).not.toBeNull()
    })

    test('Tag <input> sholud not be displayed after creating', () => {
        const component = create(<ProfileStatus status='Way of Ninja' />)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })

    test('Tag <p> sholud be display after creating', () => {
        const component = create(<ProfileStatus status='Way of Ninja' />)
        const root = component.root
        let p = root.findByType('p')
        expect(p.children[0]).toBe('Way of Ninja')
    })

    test('Status sholud be turned to editMode instead of tag <p>', () => {
        const component = create(<ProfileStatus status='Way of Ninja' />)
        const root = component.root
        let p = root.findByType('p')
        p.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Way of Ninja')
    })

    test('Callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus updateStatus={mockCallback} />)
        const instance = component.getInstance()
        instance.editModeOff()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
