import { TextInput } from './index';
import { render, screen, fireEvent } from '@testing-library/react';

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img1.png',
        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img2.png',
        },
        {
            id: 1,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3.png',
        },
    ]
};


describe('<TextInput />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue="testando" />);

        // Use getByPlaceholderText para capturar apenas um elemento
        const input = screen.getByPlaceholderText(/type your search/i);

        // Verifica se o input está no documento
        expect(input).toBeInTheDocument();

        // Verifica se o valor do input é "testando"
        expect(input.value).toBe('testando');
    });

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue="testando" />);

        // Captura o input
        const input = screen.getByPlaceholderText(/type your search/i);

        // Simula o evento de digitação
        fireEvent.change(input, { target: { value: 'novo valor' } });

        // Verifica se a função handleChange foi chamada
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
