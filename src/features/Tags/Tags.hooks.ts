import { ITagModel } from 'features/Tags/Tags.models';
import { useSelector } from 'react-redux';
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import { useMemo } from 'react';

const useCurrentTag = (id: string): ITagModel | undefined => {
  const tagsCollection = useSelector(tagsSelectors.getCollection);
  return useMemo(() => tagsCollection.find((item) => item.id === id), [
    tagsCollection,
    id,
  ]);
};

export const TagsHooks = {
  useCurrentTag,
};
