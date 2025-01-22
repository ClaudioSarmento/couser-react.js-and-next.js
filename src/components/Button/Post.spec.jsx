import { PostCard } from "../PostCard";
import { render, screen } from '@testing-library/react';
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock
describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        const { debug } = render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: /title 1/i }))
            .toHaveAttribute('src', props.cover);

        expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { debug } = render(<PostCard {...props} />);
        debug();
    });
});