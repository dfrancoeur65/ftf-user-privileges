class CreateInvestments < ActiveRecord::Migration[5.1]
  def change
    create_table :investments do |t|
      t.references :offering, foreign_key: true
      t.decimal :amount, precision: 8, scale: 2
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
