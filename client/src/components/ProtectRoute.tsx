// 特定のルートに対して認証ガードを提供するコンポーネントです。
// 認証されていないユーザーがアクセスしようとした場合に、ログインページにリダイレクトする役割を持ちます。

import { useNavigate } from '@solidjs/router';
import { useAuth } from '../context/AuthContext';
import { createEffect } from 'solid-js';

function ProtectedRoute(props: any) {
  const { user } = useAuth();
  const navigate = useNavigate();

  createEffect(() => {
    if (!user()) {
      navigate('/auth');
    }
  });

  return user() ? props.children : null;
}

export default ProtectedRoute;
