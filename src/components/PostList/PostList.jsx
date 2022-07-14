import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

import styles from './PostList.module.css'

const PostList = () => {
	return (
		<div className={styles.PostList}>
			<h1 className={styles.PostListTitle}>Создай свой пост</h1>
			<form>
				<Input placeholder='Название поста' />
				<Input placeholder='Описание поста' />
				<Button>Создать пост</Button>
				<Button>Редактировать пост</Button>
				<Button>Удалить пост</Button>
			</form>
		</div>
	)
}

export default PostList
