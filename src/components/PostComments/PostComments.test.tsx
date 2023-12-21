import { fireEvent, render, screen } from '@testing-library/react'
import Post from '.'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('inserir dois comentários', () => {
        render(<Post />);
        
        const textarea = screen.getByTestId('post-comments-form-textarea');
        const button = screen.getByTestId('post-comments-form-button');
        fireEvent.change(screen.getByTestId("post-comments-form-textarea"), {
      target: {
        value: "Este é o primeiro comentário",
      }
        });
        fireEvent.click(button);

        
    
        const primeiroComentario = screen.getByText('Este é o primeiro comentário');
        expect(primeiroComentario).toBeInTheDocument();
    
        fireEvent.change(screen.getByTestId("post-comments-form-textarea"), {
      target: {
        value: "Este é o segundo comentário",
      }
        });
        fireEvent.click(button);
    
        const segundoComentario = screen.getByText('Este é o segundo comentário');
        expect(segundoComentario).toBeInTheDocument();
      });
    });
