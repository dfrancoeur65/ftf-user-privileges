class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.boolean :admin
      t.boolean :underwriter
      t.boolean :dev
      t.boolean :sales

      t.timestamps
    end
  end
end
