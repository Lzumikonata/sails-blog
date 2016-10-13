/**
 * Created by WittBulter on 2016/10/12.
 * @description :: 文章相关服务
 *
 */


module.exports = {
	findArticle: (id, done) =>{
		Article
			.find({id: id})
			.exec((err, articles) =>{
				if (err) return done(err)
				done(null, articles)
			})
	},


	updateArticle: (id, newArticle, done) =>{
		Article
			.update({id: id}, newArticle)
			.exec((err, updated) =>{
				if (err) return done(err)
				done(null, updated)
			})
	},

	createArticle: (article, done) =>{
		Article
			.create(article)
			.exec((err, created) =>{
				if (err) return done(err)
				done(null, created)
			})
	}
}