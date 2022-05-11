import { User } from '../database/models/auth/User';
import { TodoCollection } from '../database/models/todomaster/TodoCollection';

export async function getUserTodoCollections(
  userId: string
): Promise<false | TodoCollection[]> {
  const user = await User.findOne({
    where: {
      id: userId,
    },
    include: [TodoCollection],
  });

  if (!user) return false;

  return user.todoCollections;
}
