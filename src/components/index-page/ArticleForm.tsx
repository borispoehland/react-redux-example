import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addArticleThunk, getError, getIsPending } from '@redux/entities/Article';
import asThunk from '../../utils/types';

const ArticleForm: React.FC = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

  const error: string = useSelector(getError);
  const isPending: boolean = useSelector(getIsPending);

  const [title, setTitle]: State<string> = useState('');
  const [id, setId]: State<number> = useState(1);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value }: HTMLInputElement = event.target;
    setTitle(value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    await asThunk(dispatch)(addArticleThunk({ title, id }));
    setTitle('');
    setId(id + 1);
  }

  return (
    <form onSubmit={handleSubmit}>
      {isPending && 'Loading ...'}
      {!isPending && (
        <>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Title"
              id="title"
              value={title}
              disabled={isPending}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-secondary ml-2">
              ADD
            </button>
          </div>
          {error && <div className="alert-danger mt-2 p-3">{error}</div>}
        </>
      )}
    </form>
  );
};

export default ArticleForm;
