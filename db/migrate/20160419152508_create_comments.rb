class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.references :post, index: true, foreign_key: true
      t.integer :vote, default: 0

      t.timestamps null: false
    end
  end
end
