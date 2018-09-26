class CreateOfferings < ActiveRecord::Migration[5.1]
  def change
    create_table :offerings do |t|
      t.string :title
      t.string :amount
      t.timestamps
    end
  end
end
