const { Journal, AccountTypeChart, Ledger, BalanceSheet } = require('./domain');

const chartObj = {
  asset: ['Deposit', 'Accounts receivable'],
  expense: ['Communications'],
  liability: ['Accounts payable'],
  equity: ['Capital'],
  revenue: ['Sales'],
};

const journalObj = [
  {
    id: '1',
    date: '2015-01-01',
    desc: 'Start the business',
    dr: { Deposit: 1000 },
    cr: { Capital: 1000 },
  },
  {
    id: '2',
    date: '2015-01-31',
    desc: 'Did job',
    dr: { 'Accounts receivable': 1000 },
    cr: { Sales: 1000 },
  },
  {
    id: '3',
    date: '2015-02-28',
    desc: 'Internet Service Provider fee',
    dr: { Communications: 50 },
    cr: { 'Accounts payable': 50 },
  },
];

const chart = new AccountTypeChart.Factory().createFromObject(chartObj);
const journal = new Journal.Factory().createFromArray(journalObj);
const ledger = new Ledger.Factory().createFromJournalAndChart(journal, chart);
const balanceSheet = new BalanceSheet(ledger);

const ledgerRepository = new Ledger.Repository();
ledgerRepository.saveAsYamlToPath(ledger, `${__dirname}/ledger.yml`);

const balanceSheetRepository = new BalanceSheet.Repository();
balanceSheetRepository.saveYamlToPath(balanceSheet, `${__dirname}/bs.yml`);

console.log();
