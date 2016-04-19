class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.references :post, index: true, foreign_key: true
      t.integer :votes, default: 0

      t.timestamps null: false
    end
  end
end
