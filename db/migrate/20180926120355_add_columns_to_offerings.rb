class AddColumnsToOfferings < ActiveRecord::Migration[5.1]
  def change
    add_column :offerings, :ltv, :decimal
    add_column :offerings, :state, :string
    add_column :offerings, :open_for_investment, :decimal
    add_column :offerings, :borrower_score, :integer
  end
end
